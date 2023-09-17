import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { selectCurrentCountry, selectDetails } from '../store/details/details-selector';
import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { clearDetails, loadCountryByName } from '../store/details/details-actions';


export const Details = () => {
  const dispatch = useDispatch()
  const { name } = useParams();
  const navigate = useNavigate();

  const {currentCountry, error, status} = useSelector(selectDetails);
  
  useEffect(() => {
    dispatch(loadCountryByName(name));

    return () => {
      dispatch(clearDetails())
    }
  }, [name, dispatch])

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === 'loading' ? <h2>Loading...</h2> : null}
      {status === 'Error' ? <h2>Error</h2> : null}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
