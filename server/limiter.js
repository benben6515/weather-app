import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
	windowMs: 30 * 60 * 1000,
	max: 60,
	standardHeaders: true,
	legacyHeaders: false,
})


export default limiter
