import { mixinFlex } from '@/styles/mixins';
import { Stack, styled } from '@mui/material';
import React from 'react';

const EquipmentSection = () => {
    return (
        <Container>
            hi
        </Container>
    );
};

export default EquipmentSection;

const Container = styled(Stack)`
  ${mixinFlex("column", "center", "center")}
  row-gap: 40px;
  padding: 0px 24px;
`;