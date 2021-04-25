const Icon = async (ref, iconName, setLoading) => {
    try {
      const namedImport = await import(`@material-ui/icons/${iconName}`);
      ref.current = namedImport;
    } catch (err) {
      console.log(err);
    } finally {
      return setLoading(false);
    }
  };
  
  export default Icon;