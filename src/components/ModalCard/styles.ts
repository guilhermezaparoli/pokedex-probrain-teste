import { styled } from '@mui/material/styles';


export const ContainerModalPokemon = styled('div')(({ theme }) => ({
  background: 'rgba(6, 11, 40, 0.15)',
  backdropFilter: 'blur(20px)',
  padding: '1.5rem 2.5rem',
  borderRadius: 24,
    border: `1px solid rgba(255, 255, 255, 0.25)`,
  display: 'flex',
  alignItems: 'center',
  position: 'relative',

  '> svg': {
    fill: theme.palette.primary.main,
    height: 35,
    position: 'absolute',
    margin: 8,
    top: 0,
    right: 0,
    transition: 'transform 0.3s',
    cursor: 'pointer',
    zIndex: 999,

    '&:hover': {
      transform: 'scale(1.1)',
    },
  },

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    padding: 0,
    maxWidth: 343,
  },
}));

export const ContainerDivider = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 24,
  margin: '0 40px',

  '@media (max-width: 768px)': {
    flexDirection: 'row',
  },
}));


export const Divider = styled('div')(({ theme }) => ({
  width: 1,
  height: 124,
    backgroundColor: "rgba(255, 255, 255, 0.25)",

  '@media (max-width: 768px)': {
    height: 1,
    width: 119,
  },
}));

export const ContainerPokemonStatus = styled('div')(() => ({}));

export const TextStatus = styled('h1')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '2rem',
  fontWeight: 400,
  lineHeight: 1.25,
  marginBottom: '1rem',
}));


export const Atribute = styled('p')(({ theme }) => ({
  width: '4.375rem',
  color: theme.palette.primary.main,

  fontSize: '1rem',
  lineHeight: 1,
}));


export const AtributeValue = styled('p')(({ theme }) => ({
    color: theme.palette.primary.main,
  fontSize: '1rem',
  fontWeight: 700,
  width: 30,
}));

export const ContainerAtributes = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  marginBottom: '2rem',

  '@media (max-width: 768px)': {
    gap: 10,
    marginBottom: '1rem',
  },
}));

export const StatusLinha = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 10,

  '> p': {
    fontSize: '1.25rem',
  },
});

export const StatusAttack = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 5,

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
});

export const TitleStatus = styled('p')({
  fontSize: '1.5rem',
});

