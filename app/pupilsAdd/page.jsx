import PupilsAddClient from "../../components/Pupils";
import FilterOptions from "../../components/FilterOption"

const PupilsAddPage = () => {
    return (
        <div>
            <h1>Add Pupils</h1>
            <PupilsAddClient />
            <FilterOptions />
        </div>
    );
};

export default PupilsAddPage;