import { useQuery } from 'react-apollo'
import {  PROJECTNAME_QUERY } from './queries'

const useProjectDetail = () => {
  const { data, loading, error } = useQuery(PROJECTNAME_QUERY);

  if (error) {
    console.error(error)
  }

  return {
    loading,
    projectName: data && data.projectDetail.projectName
  }
}

export default useProjectDetail