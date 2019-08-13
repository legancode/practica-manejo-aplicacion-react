import React from 'react'
import Card from './Card';

const Content = () => {
    return (
        <div className="container">
            <div className="row justify-content-center justify-content-md-around">
                <Card name="item 1" />
                <Card name="item 2" />
                <Card name="item 3" />
                <Card name="item 4" />
                <Card name="item 5" />
                <Card name="item 6" />
                <Card name="item 7" />
                <Card name="item 8" />
                <Card name="item 9" />
            </div>
        </div>
    )
}

export default Content
