import React from 'react';
import {
    StyledCenterPointTimeline,
    StyledPointTimeline,
} from '@components/atoms/PointTimeline/PointTimeline.style';

const PointTimeline = ({ spaceRight, isActive }) => {
    return (
        <StyledPointTimeline isActive={isActive} spaceRight={spaceRight}>
            <StyledCenterPointTimeline isActive={isActive}></StyledCenterPointTimeline>
        </StyledPointTimeline>
    );
};

export default PointTimeline;
