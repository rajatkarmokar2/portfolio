import React from 'react';
import Container from './../containers/Container';
import SkillRadarChart from '../../pages/Demo';

const HomeSkills = () => {
    return (
        <div className='bg-blue-50 dark:bg-darkblue overflow-hidden'>
            <Container>
                <SkillRadarChart />
            </Container>
        </div>
    );
};

export default HomeSkills