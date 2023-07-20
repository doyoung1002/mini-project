
const express = require("express");
const { Items, Comments } = require("../models");
const router = express.Router();

//? 댓글 조회 
router.get("/:itemId/comments", async (req, res) => {
    try {
        const { itemId } = req.params;

        //! 상품이 존재하지 않을 때
        const items = await Items.findOne({ where: { itemId } })
        if (!items) {
            return res
                .status(404)
                .json({ errorMessage: "상품이 존재하지 않습니다." });
        }

        const comments = await Comments.findAll({
            where: { ItemId: itemId },
            attributes: [
                'commentId',
                'ItemId',
                'nickname',
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
        return res
            .status(400)
            .json({ errorMessage: "댓글 조회에 실패하였습니다." });
    }
});

//? 댓글 생성
router.post("/:itemId/comments", async (req, res) => {
    try {
        const { itemId } = req.params;
        //! 상품을 못 찾을 때 에러
        const items = await Items.findOne({ where: { itemId } })
        if (!items) {
            return res
                .status(404)
                .json({ errorMessage: "상품이 존재하지 않습니다." });
        }
        //! body에 필요한 데이터가 없을 때
        const { comment, nickname, password, confirm } = req.body;
        if (!comment || !nickname || !password || !confirm)
            return res
                .status(412)
                .json({ errormessage: "데이터 형식이 올바르지 않습니다" });
        //! 비밀번호 확인 불일치
        if (password !== confirm) {
            return res
                .status(412)
                .json({ errorMessage: "패스워드가 일치하지 않습니다." });
        }
        await Comments.create({
            ItemId: itemId,
            nickname,
            password,
            comment,
        });
        return res.status(201).json({ message: "댓글을 작성하였습니다." });
    } catch (err) {
        console.error(err)
        return res
            .status(400)
            .json({ errorMessage: "댓글 작성에 실패하였습니다." });
    }
});

//? 댓글 수정
router.put("/:itemId/comments/:commentId", async (req, res) => {
    try {
        const { itemId, commentId } = req.params;
        const { comment, password } = req.body;
        //! body에 필요한 데이터가 없을 때
        if (!comment) {
            return res
                .status(412)
                .json({ errorMessage: "데이터 형식이 올바르지 않습니다." })
        }
        //! 게시물 못 찾을 때 에러
        const item = await Items.findOne({ where: { itemId } })
        if (!item) {
            return res
                .status(404)
                .json({ errorMessage: "상품이 존재하지 않습니다." });
        }
        //! 댓글을 못 찾을 때 에러
        const comments = await Comments.findOne({ where: { commentId: commentId } })
        if (!comments) {
            return res
                .status(404)
                .json({ errorMessage: "댓글이 존재하지 않습니다." });
        }
        //! 비밀번호가 틀릴 때 
        if (comments.password !== password) {
            return res
                .status(403)
                .json({ errorMessage: "댓글의 수정 권한이 존재하지 않습니다." });
        }

        const updateCommentStatus = await Comments.update(
            { comment },
            { where: { commentId } }
        );

        //! acknowledged 정상적 처리 확인 
        if (updateCommentStatus) {
            return res.status(200).json({ message: "댓글을 수정하였습니다" }); // 상태코드 수정 201 -> 204
        } else {
            return res
                .status(400)
                .json({ errorMessage: "댓글 수정이 정상적으로 처리되지 않았습니다." });
        }

    } catch (err) {
        console.error(err)
        res
            .status(400)
            .json({ errorMessage: "댓글 수정에 실패하였습니다." });
    }
});
//? 댓글 삭제
router.delete("/:itemId/comments/:commentId", async (req, res) => {
    try {
        const { itemId, commentId } = req.params;
        const { password } = req.body;

        //! 게시물 못 찾을 때 에러
        const item = await Items.findOne({ where: { itemId } })
        if (!item) {
            return res
                .status(404)
                .json({ errorMessage: "상품이 존재하지 않습니다." });
        }
        //! 댓글을 못 찾을 때 에러
        const comment = await Comments.findOne({ where: { commentId } })
        if (!comment) {
            return res
                .status(404)
                .json({ errorMessage: "댓글이 존재하지 않습니다." });
        }
        //! 비밀번호가 틀릴 때  
        if (comment.password !== password) {
            return res
                .status(403)
                .json({ errorMessage: "댓글의 삭제 권한이 존재하지 않습니다." });
        }

        const deleteCommentStatus = await Comments.destroy(
            { where: { commentId } }
        );

        //! acknowledged 정상적 처리 확인 
        if (deleteCommentStatus) {
            return res.status(200).json({ message: "댓글을 삭제하였습니다" }); // 상태코드 수정 201 -> 204
        } else {
            return res
                .status(400)
                .json({ errorMessage: "댓글 삭제가 정상적으로 처리되지 않았습니다." });
        }

    } catch (err) {
        console.error(err)
        res
            .status(400)
            .json({ errorMessage: "댓글 삭제에 실패하였습니다." });
    }
});

module.exports = router;
