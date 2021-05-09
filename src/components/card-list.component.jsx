import React from 'react';
import './card-list.style.css';
import { Card } from './card.component';

export const CardList = (props) => (
    <div className="card-list">
        {
            props.monsters.map((e, i) => {
                return <Card key={e.id} monster={e}></Card>;
            })
        }
    </div>
);
