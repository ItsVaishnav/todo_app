import { useAllContext } from "../store/AllContext";

const Errormessage = () => {
  const {error} = useAllContext(); 
    return <>{error != '' && <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{error.error}</strong> {error.errorDesc}
</div>}</>
}
export default Errormessage;