import React from 'react'
import Card from './Card';

const Content = () => {
    return (
        <div className="container">
            <div className="row justify-content-center justify-content-md-around">
                <Card id="1" name="item 1" />
                <Card id="2" name="item 2" />
                <Card id="3" name="item 3" />
                <Card id="4" name="item 4" />
                <Card id="5" name="item 5" />
                <Card id="6" name="item 6" />
                <Card id="7" name="item 7" />
                <Card id="8" name="item 8" />
                <Card id="9" name="item 9" />
            </div>
        </div>
    )
}

export default Content
