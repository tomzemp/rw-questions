import React from 'react'
import classes from './App.module.css'
import {SingleSelectField, SingleSelectOption} from '@dhis2/ui'

const MyApp = () => (
    <div className={classes.container}>
        <div className={classes.hoverSpan}>
            <span>Hover over me</span>
            <div className={classes.hiddenSelect}>
                <SingleSelectField label='Choose something' onChange={()=>{}}>
                    <SingleSelectOption value="1" label="one" />
                    <SingleSelectOption value="2" label="two" />
                </SingleSelectField>
            </div>        
        </div>
        <div className={classes.hoverClose}>
            <span>Hover over me</span>
            <div className={classes.shownSelect}>
                <SingleSelectField label='Choose something' onChange={()=>{}}>
                    <SingleSelectOption value="1" label="one" />
                    <SingleSelectOption value="2" label="two" />
                </SingleSelectField>
            </div>        
        </div>        
    </div>
)

export default MyApp
