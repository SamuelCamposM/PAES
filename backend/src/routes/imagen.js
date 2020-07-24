import {Router} from "express"

const router = Router()

router.post('/upload', (req , res) => {
    console.log(req.file)
    console.log(req.body)
    res.json({msg:"imagen"})
})

module.exports = router;