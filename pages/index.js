import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/posts/create');
    }, []);

    return null;
};

export default Home;
