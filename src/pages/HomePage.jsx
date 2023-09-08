import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleCountries, selectCountriesInfo } from '../store/countries/countries-selector';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { loadCountries } from '../store/countries/countries-actions';
import { selectControls } from '../store/controls/controls-selector';

export const HomePage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {search, region} = useSelector(selectControls);
  const countries = useSelector(state => selectVisibleCountries(state, {search, region}));
  const {status, error, qty} = useSelector(selectCountriesInfo);
  
  useEffect(() => {
    if(!qty){
      dispatch(loadCountries())
    }
  }, [qty, dispatch])
  return (
    <>
      <Controls />
      {error ? <h2>Can't load info</h2> : null}
      {status === 'status' ? <h2>Loading</h2> : null}
      {status === 'received' && (
        <List>
        {countries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: 'Population',
                description: c.population.toLocaleString(),
              },
              {
                title: 'Region',
                description: c.region,
              },
              {
                title: 'Capital',
                description: c.capital,
              },
            ],
          };

          return (
            <Card
              key={c.name}
              onClick={() => navigate(`/country/${c.name}`)}
              {...countryInfo}
            />
          );
        })}
      </List>
      )}
      
    </>
  );
};
