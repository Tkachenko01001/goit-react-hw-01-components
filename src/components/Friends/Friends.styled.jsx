import styled from '@emotion/styled';

export const FriendsListItem = styled.li`
    display: flex;
    gap: 5px;
    align-items: center;
`;

export const Status = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${(status) =>
    status.isOnline ? "green" : "red"};
`;

export const FriendsBlock = styled.div`
    margin-bottom: 30px;
`