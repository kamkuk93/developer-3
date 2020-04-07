import React from 'react';
import styles from './fourth_section.module.scss';

import StepUserExperience from '../step_user_experience/step_user_experience'
import StepUserInterface from '../step_user_interface/step_user_interface'
import StepWebDevelopment from '../step_web_development/step_web_development'





class FourthSection extends React.Component {
    state = {
        activeOption: 'step_1',
    }

    changeStep = (type) => {
        this.setState({
            activeOption: type,
        })
    }




    render() {


        return (
            <div>

                <div className={styles.wrapper} id={'proces'}>



                    <p className={styles.title}>Proces</p>

                    <div className={styles.steps}>
                        <p className={this.state.activeOption === 'step_1' ? styles.step_1_a : styles.step_1} onClick={() => this.changeStep('step_1')}>1</p>
                        <p className={this.state.activeOption === 'step_2' ? styles.step_2_a : styles.step_2} onClick={() => this.changeStep('step_2')}>2</p>
                        <p className={this.state.activeOption === 'step_3' ? styles.step_3_a : styles.step_3} onClick={() => this.changeStep('step_3')}>3</p>
                    </div>



                    <div className={styles.wrapper_steps}>
                        {this.state.activeOption === 'step_1' ? <StepUserExperience /> : null}
                        {this.state.activeOption === 'step_2' ? <StepUserInterface /> : null}
                        {this.state.activeOption === 'step_3' ? <StepWebDevelopment /> : null}
                    </div>
                </div>





            </div>

        )
    }


}

export default FourthSection;
