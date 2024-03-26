// import css from "./teachers-page.module.css";
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import {fetchAll} from "../../redux/teachers/teachers-operations";
import {selectTeachers} from "../../redux/teachers/teachers-selectors";
import CardList from "../../components/CardList/CardList";
import Container from "../../components/Container/Container";
const TeachersPage=()=>{
    const dispatch = useDispatch();
    const data = useSelector(selectTeachers);
   
    useEffect(() => {
        dispatch(fetchAll());
    
      }, [dispatch]);
   

    return(
        <main>
            <section>
            <Container backgroundColor="#eee">
                <CardList data={data}/>
                </Container>
            </section>

        </main>
    )
}
export default TeachersPage;