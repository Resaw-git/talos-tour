import styles from "./previews.module.css";
import { useAppSelector } from "#redux/hooks";
import { PreviewImg } from "#ui/slider/previews/preview-img/preview-img";

export const Previews = () => {
  const { items } = useAppSelector(state => state.slider);

  const renderViews = () => {
    const nums = [];
    for (let i = 0; i < items.length; i++) {
      nums.push(<PreviewImg key={i} number={i} src={items[i]} />);
    }

    return nums;
  }

  return (
    <div className={styles.previews}>
      {renderViews()}
    </div>
  );
};
