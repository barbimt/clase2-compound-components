import { ReactNode } from "react";
import { FollowingButtonComponent } from 'features/following/button';

type ChildrenProps = {
    children?: ReactNode;
    src?: string;
    alt?: string;
    isFav?: boolean;
    onToggleFavorite?: (setFav: boolean) => void;
  };


  const Card = ({ children }: ChildrenProps) => {
    return (
      <article>
        {children}
      </article>
    );
  };

  Card.Picture = function CardPicture({ src, alt }: ChildrenProps) {
    return <img src={src} alt={alt} />;
  };
  
  Card.Content = function CardContent({ children }: ChildrenProps) {
    return <span>{children}</span>;
  };
  
  Card.Actions = function CardActions({ isFav,onToggleFavorite  }: ChildrenProps) {
    return <FollowingButtonComponent 
    //le doy valor por defecto si isFav es nulo
      isFav={isFav || false} 
      //el ! es para que no sea nulo
      onToggleFavorite={onToggleFavorite!} 
    />;
  };
  
 
  
  export default Card;