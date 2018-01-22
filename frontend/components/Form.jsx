import React from 'react'

export default class Form extends React.Component {
    constructor() {
        super()
    }


    render() {
        return (
            <div>
                <div>form</div>
                <div>
                    {this.props.fields.map((f, i) => (
                        <div key={i}>
                            <label htmlFor={f.id || f.name} >{f.label}</label>
                            <input type={f.type || 'text'} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}