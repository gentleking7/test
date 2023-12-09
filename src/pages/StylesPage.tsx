import * as React from 'react';
import './StylesPage.css';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  TextField,
  Paper,
} from '@mui/material';
import { RECIPE_PAGE_PATH, RECOMMENDATION_PAGE_PATH } from '../App';
import { getRecipes } from '../app/sampleData';
import { CommonHeader } from '../components/CommonHeader';

interface StyleProps {
  style: string;
}

function Style({ style }: StyleProps) {
  const navigate = useNavigate();
  const recipes = getRecipes();

  return (
    <Paper className='style'>
      <div onClick={(e) => navigate(RECOMMENDATION_PAGE_PATH + `?query=${style}`)}>
        <h1>#{style}</h1>
      </div>
      <div>
        <Grid container spacing={1}>
          {
            recipes.map((recipe, i) => {
              return (
                <Grid
                  item
                  className='style-container'
                  xs={4}
                  onClick={(e) => navigate(RECIPE_PAGE_PATH + `/${recipe.id}`)}
                >
                  <div className='app-container'>
                    <img src={recipe.img} alt='여기에 그림이 들어갈 예정'></img>
                  </div>
                </Grid>
              )
            })
          }
        </Grid>
      </div>
    </Paper>
  )
}

function StylesPageBody() {
  const styles = [
    '크리스마스',
    '안주',
    '다이어트',
  ]

  return (
    <div className='app-body'>
      {
        styles.map((style) => <Style style={style} />)
      }

    </div>
  )
}

export default function StylesPage() {


  return (
    <div>
      <CommonHeader />
      <StylesPageBody />
    </div>
  )

}