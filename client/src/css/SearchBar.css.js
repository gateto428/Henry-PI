import styled from 'styled-components';
import css from '@styled-system/css'

export const Input = styled.input(
  css({
    padding: '1em',
    float: 'right',
    boxSizing: 'border-box',
    display: 'block',
    width: '20%',
    marginLeft: 3,
    color: 'black',
    boxShadow: 'none',
    borderRadius: '30px', 
    textAlign: 'center',
    fontFamily: 'Papyrus',
    borderStyle: 'double',
    '&:focus':{
      outline: 0,
      borderColor: 'accent',
    },

    '&::placeholder': {
      color: 'black',
    },
  })
);

export const Button = styled.input(
  css({
    padding: '1em',
    float: 'right',
    boxSizing: 'border-box',
    display: 'block',
    width: '20%',
    marginLeft: 3,
    border: 'thin',
    fontFamily: 'Papyrus',
    color: '#ffffff',
    backgroundColor: '#4c4dcc',
    borderRadius: '30px',
    '&:hover': {
      cursor: 'pointer',
    }
  })
);

export const Form = styled.form(
  css({
    width: '100%',
    padding: '10px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  })
);