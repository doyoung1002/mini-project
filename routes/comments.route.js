const express = require("express");
const router = express.Router();

const sequelize = require("sequelize")

const authMiddleware = require("../middlewares/auth-middleware");
const { comment_errorhandling } = require('../middlewares/auth.errorhandling');
const { Users, Items, Comments } = require("../models");

// 댓글 조회 API
router.get("/:itemId/comments", async (req, res) => {
    const { itemId } = req.params;

    try {
        //! 상품이 존재하지 않을 때
        const items = await Items.findOne({ where: { itemId } })
        if (!items) return res.status(404).json({ errorMessage: "상품이 존재하지 않습니다." });

        const comments = await Comments.findAll({
            where: { ItemId: itemId },
            attributes: [
                'commentId',
                'UserId',
                'ItemId',
                'comment',
                'createdAt',
                'updatedAt',
            ],
            group: ['commentId'],
            raw: true
        });

        res.status(200).json({ comments: comments });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ errorMessage: "댓글 조회에 실패하였습니다." });
    };
});

// 댓글 생성 API
router.post("/:itemId/comments", authMiddleware, async (req, res) => {
    const { itemId } = req.params;
    const { userId } = res.locals.user;
    const { comment } = req.body;

    const { error } = comment_errorhandling.validate({ comment });

    try {
        if (error) return res.status(400).json({ errorMessage: error.details[0].message });

        //! 상품을 못 찾을 때 에러
        const items = await Items.findOne({ where: { itemId } })
        if (!items) return res.status(404).json({ errorMessage: "게시글이 존재하지 않습니다." });

        await Comments.create({
            UserId: userId,
            ItemId: itemId,
            comment: comment
        });

        return res.status(201).json({ message: "댓글을 작성하였습니다." });
    } catch (err) {
        console.error(err)
        return res.status(400).json({ errorMessage: "댓글 작성에 실패하였습니다." });
    };
});

// 댓글 수정 API
router.put("/:itemId/comments/:commentId", authMiddleware, async (req, res) => {
    const { itemId, commentId } = req.params;
    const { userId } = res.locals.user;
    const { comment } = req.body;

    const { error } = comment_errorhandling.validate({ comment });

    try {
        if (error) return res.status(400).json({ errorMessage: error.details[0].message });

        //! 게시물 못 찾을 때
        const item = await Items.findOne({ where: { itemId } })
        if (!item) return res.status(404).json({ errorMessage: "상품이 존재하지 않습니다." });

        //! 댓글을 못 찾을 때
        const comments = await Comments.findOne({ where: { commentId: commentId } })
        if (!comments) return res.status(404).json({ errorMessage: "댓글이 존재하지 않습니다." });

        //! 권한이 없을 때 (토큰의 닉네임 활용)
        if (comments.UserId !== userId) return res.status(403).json({ errorMessage: "댓글의 수정 권한이 존재하지 않습니다." });

        //! acknowledged 정상적 처리 확인
        const updateCommentStatus = await Comments.update({ comment }, { where: { commentId } });

        if (updateCommentStatus) {
            return res.status(200).json({ message: "댓글을 수정하였습니다" }); // 상태코드 수정 201 -> 204
        } else {
            return res.status(400).json({ errorMessage: "댓글 수정이 정상적으로 처리되지 않았습니다." });
        };

    } catch (err) {
        console.error(err)
        res.status(400).json({ errorMessage: "댓글 수정에 실패하였습니다." });
    };
});

// 댓글 삭제 API
router.delete("/:itemId/comments/:commentId", authMiddleware, async (req, res) => {
    const { itemId, commentId } = req.params;
    const { userId } = res.locals.user;

    try {
        //! 게시물 못 찾을 때
        const item = await Items.findOne({ where: { itemId } })
        if (!item) return res.status(404).json({ errorMessage: "상품이 존재하지 않습니다." });

        //! 댓글을 못 찾을 때
        const comment = await Comments.findOne({ where: { commentId } })
        if (!comment) return res.status(404).json({ errorMessage: "댓글이 존재하지 않습니다." });

        //! 권한이 없을 때 (토큰의 닉네임 활용)
        if (comment.UserId !== userId) return res.status(403).json({ errorMessage: "댓글의 삭제 권한이 존재하지 않습니다." });

        //! acknowledged 정상적 처리 확인 
        const deleteCommentStatus = await Comments.destroy({ where: { commentId } });

        if (deleteCommentStatus) {
            return res.status(200).json({ message: "댓글을 삭제하였습니다" }); // 상태코드 수정 201 -> 204
        } else {
            return res.status(400).json({ errorMessage: "댓글 삭제가 정상적으로 처리되지 않았습니다." });
        };

    } catch (err) {
        console.error(err)
        res.status(400).json({ errorMessage: "댓글 삭제에 실패하였습니다." });
    };
});

module.exports = router;