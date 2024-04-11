import InstagramIcon from '../../assets/svg-icons/instagram.png';
import FacebookIcon from '../../assets/svg-icons/facebook.png';

const SocialMedia = () => {
  return (
    <div className="social-media">
      <img src={InstagramIcon} alt="instagram icon" width="48" height="48" loading="lazy" />
      <img src={FacebookIcon} alt="facebook icon" width="48" height="48" loading="lazy" />
    </div>
  );
};

export default SocialMedia;
