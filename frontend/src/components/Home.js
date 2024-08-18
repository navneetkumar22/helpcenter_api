import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import axios from 'axios';
import Card from './Card';
const serverUrl = 'http://localhost:4000'; // should be in env file

const Home = () => {

    const [cards, setCards] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const getCards = async () => {
        const cards = await axios.get(`${serverUrl}/cards`);

        if (cards.data.cards.length > 0) {
            setCards(cards.data.cards)
        }
    }

    const doSearch = () => {
        if (cards) {
            const filteredCards = cards.filter(card =>
                card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                card.description.toLowerCase().includes(searchQuery.toLowerCase())
            )
            setCards(filteredCards)
        }
        setSearchQuery('')
    }

    useEffect(() => {
        getCards()
    }, [])

    return (
        <>
            <section className='help'>
                <div className='question'>
                    <div>
                        <h1>How can we help?</h1>
                    </div>
                    <div className='search'>
                        <input type='text' placeholder='Search' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                        <button onClick={doSearch}>&rarr;</button>
                    </div>
                </div>
            </section>

            <section className='cards'>
                {cards.map((card) => (
                    <Card data={card} key={card.id} />
                ))}
            </section>
        </>
    )
}

export default Home;