import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledContainer } from './styles';
import GifPikachuCrying from '../../assets/gif/pikachu-crying.gif';

export function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  }, []);
  return (
    <StyledContainer>
      <h1>Page not found, you will be redirected...</h1>
      <img src={GifPikachuCrying} alt="Crying Pikachu" loading="lazy" />

    </StyledContainer>
  );
}
