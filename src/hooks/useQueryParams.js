import { useNavigate } from 'react-router-dom';

export const useQueryParams = (initials) => {

    const params = []
    params.concat(initials)

    const navigate = useNavigate();

    const addParam = (newParam) => {
        let paramSaved = params.find(p => p.param === newParam.param)
        if(paramSaved){
            params.map(p => {
                if(p.param === newParam.param){
                    p.value = newParam.value
                }
            })
        }else{
            if(newParam.value !== '' && newParam.value !==  undefined){
                params.push(newParam)
            }
        }
    }

    const deleteParam = (param) => {
        params.map(p => {
            if(p.param === param){
                p.value = ''
            }
        })
    }
    
    const navigateParam = () => {
        let query = ''
        for (let i = 0; i < params.length; i++) {
            query += (query === '') ? '?' : '&'
            query += params[i].param+'='+ params[i].value
        }
        navigate(`${ query }`)
    }

    return [addParam, deleteParam, navigateParam, params]
    
}
