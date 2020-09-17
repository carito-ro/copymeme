import express from 'express';
import Vote from '../schemas/vote.schema';
import Meme from '../schemas/meme.schema';
const router = express.Router();

router.get('/:idMeme', async function (req, res) {
  try {
    const idMeme = req.params.idMeme;
    const votos = await Vote.find({
      meme: idMeme,
    });
    if (!votos) {
      return res.status(404).send({
        success: false,
        message: 'Votes not found',
        data: null,
      });
    }
    res.json(votos);
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.toString(),
      data: null,
    });
  }
});

router.post('/', async function (req, res) {
  const { author, meme, type } = req.body;
  try {
    let query = {};
    if (meme) {
      query._id = meme;
    }

    const memeDoc = await Meme.findById(query)
      .populate('author', 'name email')
      .populate('category');

    console.log(memeDoc);
    if (memeDoc) {
      if (type === 1) {
        memeDoc.positiveVotesCount += 1;
      } else {
        memeDoc.negativeVotesCount += 1;
      }

      const updateMeme = await memeDoc.save();
    }
    const voto = new Vote({
      author,
      meme,
      type,
    });
    const newVoto = await voto.save();
    res.json(newVoto);
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.toString(),
      data: null,
    });
  }
});

export default router;
