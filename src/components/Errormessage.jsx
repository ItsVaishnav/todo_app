const Errormessage = ({error, errorDesc}) => {
    return <>{error != '' && <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{error}</strong> {errorDesc}
</div>}</>
}
export default Errormessage;