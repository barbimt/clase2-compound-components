import { FC } from 'react';
import { useGetCharactersQuery } from 'features/characters/characters.endpoints';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  addCharacterToFollowingList,
  removeCharacterToFollowingList
} from 'features/following/following.slices';
import { FollowingButtonComponent } from 'features/following/button';
import Character from 'features/characters/characters.types';
import Card from './Card';

export type CharactersComponentProps = {
  rickIDDS: number[];
};

const CharactersComponent: FC<CharactersComponentProps> = ({
  rickIDDS
}: CharactersComponentProps) => {
  const { data: characters, error, isLoading } = useGetCharactersQuery({ ids: rickIDDS });
  const dispatch = useAppDispatch();
  const followingIds = useAppSelector((state) => state.following.followingIds);

  if (isLoading) return <div>Loading characters...</div>;
  if (error || !characters) return <div>Error when loading. Please try again later.</div>;
  const charactersArray = Array.isArray(characters) ? characters : [characters];

  const onToggleFavorite = (character: Character, setFav: boolean) => {
    if (setFav) {
      dispatch(addCharacterToFollowingList(character.id));
    } else {
      dispatch(removeCharacterToFollowingList(character.id));
    }
  };

  return (
    <div className={'characters'}>
      {charactersArray.map((iHateThisChars) => (
        <div className={'card'} key={iHateThisChars.id}>
          <div className={'card-image'}>
            <Card.Picture src={iHateThisChars.image} alt={iHateThisChars.name} />
          </div>
          <div className={'card-body'}>
            <Card.Content>{iHateThisChars.name}</Card.Content>
            <Card.Actions  isFav={followingIds.indexOf(iHateThisChars.id) >= 0}
                onToggleFavorite={(setFav) => onToggleFavorite(iHateThisChars, setFav)}>
            </Card.Actions>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharactersComponent;
