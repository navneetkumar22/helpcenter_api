import Card from "../models/cardModel.js";

/************************************************************** 
 * @Create_A_Card
 * @Request_type POST
 * @Route /cards
 * @description creates a new Card and returns success with new card
 ***************************************************************/

export const createCard = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: 'Title and Description are required'
            })
        }

        const newCard = await Card.create({ title, description })

        res.status(201).json({
            success: true,
            message: 'Card created successfully',
            card: newCard
        })

    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        })
    }
}


/************************************************************** 
 * @Get_All_Cards
 * @Request_type Get
 * @Route /cards
 * @description returns a list of all cards
 ***************************************************************/

export const getAllCards = async (_req, res) => {
    try {

        const allCards = await Card.find();

        //if no cards are there
        if (allCards.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'There are no cards'
            })
        }

        res.status(200).json({
            success: true,
            cards: allCards
        })

    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        })
    }
}


/************************************************************** 
 * @Get_A_Card
 * @Request_type Get
 * @Route /cards/:id
 * @description returns a single card with given unique id
 ***************************************************************/

export const getCard = async (req, res) => {
    try {

        const cardId = req.params.id;
        const card = await Card.findById(cardId);

        //if card not found
        if (!card) {
            return res.status(404).json({
                success: false,
                message: 'The card does not exist'
            })
        }

        res.status(200).json({
            success: true,
            card: card
        })

    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        })
    }
}