import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { drawerWidth } from "../../constants/AppConstants";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getListGenres } from "../../redux/selector/movieSelector";
import GenreItem from "../../component/GenreItem";

const arrowStyleRight = {
  background: "transparent",
  border: 0,
  color: "black",
  right: `calc(0% + 1px)`,
};

const arrowStyleLeft = {
  background: "transparent",
  border: 0,
  color: "black",
  left: `calc(0% + 1px)`,
};
const CustomRight = ({ onClick }) => (
  <button className="react-multiple-carousel__arrow" onClick={onClick} style={arrowStyleRight}>
    <ArrowForwardIcon style={{ fontSize: "50px" }} />
  </button>
);

const CustomLeft = ({ onClick }) => (
  <button className="react-multiple-carousel__arrow" onClick={onClick} style={arrowStyleLeft}>
    <ArrowBackIcon style={{ fontSize: "50px" }} />
  </button>
);

const CarouselGenreComponent = (props) => {
  const { sizeScreen } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  // ---START--- DATA FROM REDUX
  const listGenres = useSelector(getListGenres);

  // ---END--- DATA FROM REDUX

  // --- START --- funtion handle in component useCallback

  // const onDelete = useCallback(() => {
  //   dispatch(closeDialogDeleteTrash());
  //   dispatch(deleteUserTrash());
  // }, [dispatch]);

  // const onClose = useCallback(() => {
  //   dispatch(closeDialogDeleteTrash());
  // }, [dispatch]);

  // --- END --- funtion handle in component
  return (
    <>
      {console.log("CarouselGenreComponent Render")}
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay={false}
        autoPlaySpeed={10000000000}
        centerMode={false}
        className=""
        containerClass=""
        dotListClass=""
        draggable={true}
        focusOnSelect={false}
        infinite={false}
        customRightArrow={<CustomRight />}
        customLeftArrow={<CustomLeft />}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        partialVisible
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: Math.floor((sizeScreen[0] - drawerWidth) / 150),
            partialVisibilityGutter: 3,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 20,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 20,
          },
        }}
      >
        {listGenres.map(({ id, name }, index) => {
          return <GenreItem key={index} text={name} index={index} />;
        })}
      </Carousel>
    </>
  );
};

CarouselGenreComponent.propTypes = {
  sizeScreen: PropTypes.array.isRequired,
};
export default memo(CarouselGenreComponent);
