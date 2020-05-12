import styled from "styled-components";


const BaseText = styled(Text)<{ isBold?: boolean, isUppercase: boolean }>`
  text-transform: ${ props => props.isUppercase ? 'uppercase' : 'none'};
`;

export const TextLegend = styled(BaseText)`
  font-size: 12px;
  line-height: 18px;
`;

export const TextDefault = styled(BaseText)`
  font-size: 16px;
  line-height: 24px;
`;

export const TextLabel = styled(BaseText)`
  font-size: 12px;
`;

export const TextButton = styled(BaseText)`
  font-size: 16px;
`;

export const TextLink = styled(BaseText)`
  font-size: 12px;
`;