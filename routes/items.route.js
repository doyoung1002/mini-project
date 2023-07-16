const express = require("express");
const { Items } = require("../models");
const router = express.Router();

// 상품 생성
router.post("/", async (req, res) => {
    try {
        const { itemName, explanation, price, imageUrl } = req.body;

        const item = await Items.create({
            itemName,
            explanation,
            price,
            imageUrl,
        });
        return res.status(201).json({ message: "상품 생성에 성공하였습니다" });
    } catch (err) {
        console.error(err);
        return res
            .status(400)
            .json({ errorMessage: "상품 생성에 실패하였습니다." });
    }
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
        return res
            .status(400)
            .json({ errorMessage: "상품 조회에 실패하였습니다." });
    }
});

// 상품 상세 조회
router.get("/:itemId", async (req, res) => {
    try {
        const { itemId } = req.params;
        const item = await Items.findOne({
            attributes: ["itemId", "itemName", "explanation", "price", "imageUrl"],
            where: { itemId }
        });

        return res.status(200).json({ data: item });
    } catch (err) {
        console.log(err);
        return res
            .status(400)
            .json({ errorMessage: "상품 상세 조회에 실패하였습니다." });
    }
});


module.exports = router;
