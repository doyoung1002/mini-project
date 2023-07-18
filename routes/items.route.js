const express = require("express");
const { Items } = require("../models");
const authMiddleware = require("../middlewares/auth-middleware");
const router = express.Router();

// 상품 생성
router.post("/", async (req, res) => {
    const { itemName, explanation, price, imageUrl } = req.body;

    try {
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

// 상품 목록 조회
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

// 상품 상세 조회
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

// 상품 수정
router.put('/:itemId', authMiddleware, async (req, res) => {
    const { nickname } = res.locals.user;
    const { itemId } = req.params;
    const { title, content } = req.body;

    try {
        //! body 데이터가 정상적으로 전달되지 않은 경우
        if (Object.keys(req.body).length === 0) return res.status(400).json({ message: "데이터 형식이 올바르지 않습니다" });

        //! title의 형식이 비정상적인 경우
        if (!title || title.length > 25) return res.status(412).json({ errorMessage: "상품 제목의 형식이 일치하지 않습니다." });

        //! content의 형식이 비정상적인 경우
        if (!content || content.length > 1000) return res.status(412).json({ errorMessage: "상품 내용의 형식이 일치하지 않습니다." });

        //* 현재 param에 해당하는 게시글 가져오기
        const item = await Items.findOne({ where: { itemId } });

        //! 401 게시글 수정이 실패한 경우
        if (!item) return res.status(401).json({ errorMessage: "상품이 존재하지 않습니다." });

        //! 403 게시글을 수정할 권한이 존재하지 않는 경우
        if (nickname !== item.nickname) return res.status(403).json({ errorMessage: "상품 수정의 권한이 존재하지 않습니다." });

        //* 게시물 삭제 부분
        const [updateItemStatus] = await Items.update(
            { title, content }, { where: { itemId } }
        );

        if (updateItemStatus) {
            return res.status(200).json({ message: "상품을 수정하였습니다" });
        } else {
            return res.status(401).json({ errorMessage: "상품이 정상적으로 수정되지 않았습니다." });
        };

    } catch (err) {
        console.error(err);
        return res.status(400).json({ errorMessage: "상품 수정에 실패하였습니다." });
    };
});

// 상품 삭제
router.delete('/:itemId', authMiddleware, async (req, res) => {
    const { nickname } = res.locals.user;
    const { itemId } = req.params;

    try {
        const item = await Items.findOne({ where: { itemId } });

        //! 404 게시글이 존재하지 않는 경우
        if (!item) { return res.status(404).json({ errorMessage: "상품이 존재하지 않습니다." }); }

        //! 403 게시글을 삭제할 권한이 존재하지 않는 경우
        //! 현재 로그인된 유저의 아이디와 게시글의 아이디가 불일치 할 경우 수정 권한 없음
        if (nickname !== item.nickname) { return res.status(403).json({ errorMessage: "상품의 삭제 권한이 존재하지 않습니다." }); }

        //! 게시글 삭제에 실패한 경우
        const [deleteItemStatus] = await Items.destroy({ where: { itemId } });

        if (deleteItemStatus) {
            return res.status(200).json({ message: "상품을 삭제하였습니다" });
        } else {
            return res.status(401).json({ errorMessage: "상품이 정상적으로 삭제되지 않았습니다." });
        };

    } catch (err) {
        console.error(err);
        return res.status(400).json({ errorMessage: "상품 삭제에 실패하였습니다." });
    };
});

module.exports = router;