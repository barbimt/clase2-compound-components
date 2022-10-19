import { ReactNode } from "react";

type ChildrenProps = {
    children?: ReactNode;
    src?: string;
    alt?: string;
    isFav?: number;
    onToggleFavorite?: () => boolean
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
  
  Card.Text = function CardContent({ children }: ChildrenProps) {
    return <span>{children}</span>;
  };
  
  Card.Actions = function CardActions({ isFav,onToggleFavorite  }: ChildrenProps) {
    return <FollowingButtonComponent />;
  };
  
 
  
  export default Card;