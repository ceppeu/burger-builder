import React from 'react'

import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Meat', type: 'meat'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'}
]

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(control => {
      return <BuildControl
      added={() => props.ingredientAdded(control.type)}
      removed={() => props.ingredientRemoved(control.type)}
      key={control.label} 
      label={control.label}
      disabled={props.disabled[control.type]} />
    })}
    <button
      onClick={props.ordered}
      className={classes.OrderButton}
      disabled={!props.purchaseable}>
        ORDER NOW
    </button>
  </div>
)
export default buildControls