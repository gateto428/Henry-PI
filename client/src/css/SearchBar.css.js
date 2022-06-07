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
    fontFamily: 'body',
    color: 'black',
    boxShadow: 'none',
    borderRadius: '30px', 
    textAlign: 'center',
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
    width: '10%',
    marginLeft: 3,
    border: 'thin',
    fontFamily: 'body',
    color: '#ffffff',
    fontWeight: 'bold',
    backgroundColor: '#4c4dcc',
    borderRadius: '30px',
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