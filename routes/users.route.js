const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");

const { signup_errorhandling, login_errorhandling } = require('../middlewares/auth.errorhandling.js');

const { Users } = require("../models");

// 회원가입 API
router.post("/signup", async (req, res) => {
    const { nickname, password, confirm } = req.body;
    const { error } = signup_errorhandling.validate({ nickname, password, confirm });

    try {
        if (error) {
            return res.status(400).json({ errorMessage: error.details[0].message });
        };

        //! 닉네임 중복 확인
        const user = await Users.findOne({ where: { nickname } });
        if (user) return res.status(412).json({ errorMessage: "중복된 닉네임입니다." });

        //* 회원가입 성공 
        await Users.create({ nickname, password });
        return res.status(201).json({ message: "회원가입이 완료되었습니다." });

    } catch (err) {
        console.error(err);
        return res.status(400).json({ errorMessage: "요청한 데이터 형식이 올바르지 않습니다." });
    }
});

// 로그인 API
router.post("/login", async (req, res) => {
    const { nickname, password } = req.body;
    const { error } = login_errorhandling.validate({ nickname, password });

    try {
        if (error) {
            return res.status(400).json({ errorMessage: error.details[0].message });
        };

        const user = await Users.findOne({ where: { nickname } });

        //! 닉네임 혹은 패스워드 불일치
        if (!user || password !== user.password) {
            res.status(412).json({ errorMessage: "닉네임 또는 패스워드를 확인해주세요.", });
            return;
        };

        // JWT 생성
        const token = jwt.sign({ userId: user.userId }, process.env.PRIVATE_KEY);

        res.cookie("authorization", `Bearer ${token}`);
        res.status(200).json({ token });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ errorMessage: "로그인에 실패하였습니다.", });
    };
});

module.exports = router;