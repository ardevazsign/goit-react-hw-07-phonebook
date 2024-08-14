import { Grid } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.overlay}>
      <Grid
        height="80"
        width="80"
        color="aqua"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        className={css.loader}
        visible={true}
        text="Loading your content..."
      />
    </div>
  );
};
