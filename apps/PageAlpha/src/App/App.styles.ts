import styled from 'styled-components';

export const AppContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

export const AppContainerTitle = styled.h1`
margin: 0 0 20px 0;
`;

export const AppContainerButton = styled.button`
  padding: 10px 20px;
  background-color: #183549;
  color: #fff;
  border-radius: 10px;
`;

export const AppContainerActorsList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px
`;

export const AppContainerActorsListItem = styled.div`
  width: 200px;
  margin: 0 auto;
`;
export const AppContainerActorsListItemImg = styled.div`
  width: 200px;
  height: 220px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const AppContainerActorsListItemCharacter = styled.h3``;
export const AppContainerActorsListItemRealName = styled.h4``;
