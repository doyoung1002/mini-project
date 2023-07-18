const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth-middleware");
const { item_errorhandling } = require('../middlewares/auth.errorhandling');

const { Items } = require("../models");

// 상품 생성 API
router.post("/", async (req, res) => {
    const { itemName, explanation, price, imageUrl } = req.body;

    const { error } = item_errorhandling.validate({ itemName, explanation, price, imageUrl });

    try {
        if (error) return res.status(400).json({ errorMessage: error.details[0].message });

        const item = await Items.create({
            itemName,
            explanation,
            price,
            imageUrl,
        });

        return res.status(201).json({ message: "상품 생성에 성공하였습니다" });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ errorMessage: "상품 생성에 실패하였습니다." });
    };
});

// 상품 목록 조회 API
router.get("/", async (req, res) => {
    try {
        const item = await Items.findAll({
            attributes: ["itemId", "itemName", "imageUrl"],
            order: [['createdAt', 'DESC']], // createdAt기준 DESC내림차순 정렬 
        });

        return res.status(200).json({ data: item });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ errorMessage: "상품 조회에 실패하였습니다." });
    };
});

// 상품 상세 조회 API
router.get("/:itemId", async (req, res) => {
    const { itemId } = req.params;

    try {
        const item = await Items.findOne({
            attributes: ["itemId", "itemName", "explanation", "price", "imageUrl"],
            where: { itemId }
        });

        return res.status(200).json({ data: item });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ errorMessage: "상품 상세 조회에 실패하였습니다." });
    };
});

// // TODO: 수정 API 추가할 생각이라면 req.body 로 받아올 값들을 다시 생각해야한다.
// // 상품 수정 API
// router.put('/:itemId', authMiddleware, async (req, res) => {
//     const { nickname } = res.locals.user;
//     const { itemId } = req.params;
//     const { title, content } = req.body;

//     const { error } = item_errorhandling.validate({ title, content });

//     try {
//         if (error) return res.status(400).json({ errorMessage: error.detail[0].message });

//         //* 현재 param에 해당하는 게시글 가져오기
//         const item = await Items.findOne({ where: { itemId } });

//         //! 401 게시글 수정이 실패한 경우
//         if (!item) return res.status(401).json({ errorMessage: "상품이 존재하지 않습니다." });

//         //! 403 게시글을 수정할 권한이 존재하지 않는 경우
//         if (nickname !== item.nickname) return res.status(403).json({ errorMessage: "상품 수정의 권한이 존재하지 않습니다." });

//         //* 게시물 삭제 부분
//         const [updateItemStatus] = await Items.update(
//             { title, content }, { where: { itemId } }
//         );

//         if (updateItemStatus) {
//             return res.status(200).json({ message: "상품을 수정하였습니다" });
//         } else {
//             return res.status(401).json({ errorMessage: "상품이 정상적으로 수정되지 않았습니다." });
//         };

//     } catch (err) {
//         console.error(err);
//         return res.status(400).json({ errorMessage: "상품 수정에 실패하였습니다." });
//     };
// });

// // TODO: 삭제 API 추가할 생각이라면 req.body 로 받아올 값들을 다시 생각해야한다.
// // 상품 삭제 API
// router.delete('/:itemId', authMiddleware, async (req, res) => {
//     const { nickname } = res.locals.user;
//     const { itemId } = req.params;

//     try {
//         const item = await Items.findOne({ where: { itemId } });
//         console.log(nickname);
//         console.log(item);

//         //! 404 게시글이 존재하지 않는 경우
//         if (!item) { return res.status(404).json({ errorMessage: "상품이 존재하지 않습니다." }); }

//         //! 403 게시글을 삭제할 권한이 존재하지 않는 경우
//         //! 현재 로그인된 유저의 아이디와 게시글의 아이디가 불일치 할 경우 수정 권한 없음
//         if (nickname !== item.nickname) { return res.status(403).json({ errorMessage: "상품의 삭제 권한이 존재하지 않습니다." }); }

//         //! 게시글 삭제에 실패한 경우
//         const [deleteItemStatus] = await Items.destroy({ where: { itemId } });

//         if (deleteItemStatus) {
//             return res.status(200).json({ message: "상품을 삭제하였습니다" });
//         } else {
//             return res.status(401).json({ errorMessage: "상품이 정상적으로 삭제되지 않았습니다." });
//         };

//     } catch (err) {
//         console.error(err);
//         return res.status(400).json({ errorMessage: "상품 삭제에 실패하였습니다." });
//     };
// });

module.exports = router;