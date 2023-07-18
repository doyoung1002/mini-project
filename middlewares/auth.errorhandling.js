const Joi = require('joi');

const signup_errorhandling = Joi.object({
    nickname: Joi.string().alphanum().min(3).required().messages({
        "string.base": "닉네임의 데이터 타입은 문자열입니다.",
        "string.alphanum": "닉네임은 대소문자(a~z, A~Z)와 숫자(0~9)로 구성되어야 합니다.",
        "string.min": "닉네임은 최소 3글자 이상이여야 합니다.",
        "any.required": "요청한 데이터 형식이 올바르지 않습니다.",
        "string.empty": "닉네임은 필수 입력 항목입니다.",
    }),

    //TODO: Joi.ref 를 통해서 비밀번호에 닉네임이 포함되어 있는 에러를 만들어보기
    password: Joi.string().min(4).required().messages({
        "string.base": "비밀번호의 데이터 타입은 문자열입니다.",
        // "string.pattern.base": "비밀번호에 닉네임이 포함되어 있습니다.",
        "string.min": "비밀번호는 최소 4글자 이상이여야 합니다.",
        "any.required": "요청한 데이터 형식이 올바르지 않습니다.",
        "string.empty": "비밀번호는 필수 입력 항목입니다."
    }),

    confirm: Joi.string().valid(Joi.ref('password')).required().messages({
        "any.only": "비밀번호와 일치해야 합니다.",
    })
});

const login_errorhandling = Joi.object({
    nickname: Joi.string().required().messages({
        "string.empty": "로그인에 실패하였습니다.",
        "any.required": "로그인에 실패하였습니다."
    }),
    password: Joi.string().required().messages({
        "string.empty": "로그인에 실패하였습니다.",
        "any.required": "로그인에 실패하였습니다."
    })
});

module.exports = {
    signup_errorhandling,
    login_errorhandling
};