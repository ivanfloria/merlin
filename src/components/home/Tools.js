
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 20px;
    margin-right: 40px;
`
const NumPodcast = styled.div`
    background-color: #3a75a7;
    color: #fff;
    font-weight: bold;
    border-radius: 10px;
    padding: 3px 6px;
    font-size: 1.2rem;
`
const Form = styled.form`
    width: 250px;
    height: auto;
`
const Input = styled.input`
    width: 100%;
    color: #666;
    padding: 10px;
    border: none;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
`

const Tools = ({handleChange,qty}) => {
    return(
        <Container>
            <NumPodcast>{qty}</NumPodcast>
            <Form>
                <Input
                    type="text"
                    placeholder="Filter podcasts..."
                    onChange={handleChange}
                />
            </Form>
        </Container>
    )
}

export default Tools