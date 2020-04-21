import React, { Component } from 'react';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from 'd3-ease';
import style from './Progress.module.css';

 class Progress extends Component {

    state={
        territory:'',
        totalNum:'',
        unavailable:''
    }

    render() {
        return (
            <div className={style.progressBar}>
                
 
                <AnimatedProgressProvider
                valueStart={0}
                valueEnd={66}
                duration={1.4}
                easingFunction={easeQuadInOut}
                >
                {(value) => {
                    const roundedValue = Math.round(value);
                    return (
                    <CircularProgressbar
                        value={value}
                        text={`${roundedValue}%`}
                        /* This is important to include, because if you're fully managing the
                        animation yourself, you'll want to disable the CSS animation. */
                        styles={buildStyles({ pathTransition: 'none' })}
                    />
                    );
                }}
                </AnimatedProgressProvider>;
            </div>
        )
    }
}

export default Progress;