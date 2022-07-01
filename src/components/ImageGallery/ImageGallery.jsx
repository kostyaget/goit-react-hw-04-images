import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export default function ImageGallery({ imagesSet, onClick, scrollRef }) {
  return (
    <GalleryList ref={scrollRef}>
      {imagesSet.map(({ id, ...props }) => (
        <ImageGalleryItem key={id} {...props} onClick={onClick} />
      ))}
    </GalleryList>
  );
}

ImageGallery.propTypes = {
  imagesSet: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
