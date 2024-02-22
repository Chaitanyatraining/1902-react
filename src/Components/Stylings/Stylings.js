import React from 'react'
import './styles.css'
import headerStyles from './stylesheader.module.css'

const Stylings = () => {
    // Inline
    // Internal
    // External 
    // Module
    const textStyle = {
        txtPros:{
            color:'yellow',
            backgroundColor:'brown'
        },
        sectionProps:{
            color:'orange',
            backgroundColor:'green',
            border:'1px solid blue',
            padding:'10px'
        }
    }

  return (
    <div>
        <h2 className='bg-warning'>Stylings</h2>
        <h5 style={{color:'red', backgroundColor:'lightgreen'}}>This is Inline Stylings</h5>
        <p style={textStyle.txtPros}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <section style={textStyle.sectionProps}>This is Internal Styles</section>
        <button className="btn">Submit</button>
        <section className={headerStyles.card}>
            this is module styles
        </section>
        <section className={headerStyles.card1}>
            this is card 2
        </section>
    </div>
  )
}

export default Stylings