import React, { Component } from 'react'

export default class Kinh extends Component {
    render() {
        let { kinh } = this.props;
        return (
            <div>
                <img onClick={() => { this.props.hamDoiKinh(kinh) }} className='ml-2 p-2 border border-width-1' style={{ cursor: 'pointer' }} width={100} src={kinh.url} alt="" />
            </div>
        )
    }
}
