// import Head from 'next/head';
import * as R from 'ramda';
// data
import { services } from '../../../data';
// components
import Layout from '../../../components/layout';
// ui
import { Section, H1, H3, Article, Box, Flex  } from '../../../ui';
// //////////////////////////////////////////////////

const Services = ({ router }) => {
  const { push, query: { id } } = router;
  if (R.isNil(id)) return null;
  const data = R.find(R.propEq('query', id), services);

  return (
    <Layout title="home" router={router}>
      <Section
        mx="auto"
        maxWidth="1200px"
        p="3rem 1rem 6rem 1rem"
      >
      <Flex alignItems="center" justifyContent="space-between">
        <Article width="55%">
          <H1
            my='.5rem'
            fontSize="2em"
            lineHeight={2}
            color="#413189"
            fontWeight="bold"
          >
            {R.path(['title'], data)}
          </H1>
          <ul>
            {
              R.path(['type'], data) === 'list' &&
              data.categories.map((item, index) => <li key={index}>{item}</li>)
            }
          </ul>
        </Article>
        <Box
          p="1.5rem"
          width="35%"
          borderRadius="4px"
          background="#f7f7f7"
        >
          <H3
            mb=".25rem"
            color="#413189"
            fontSize="1.17em"
            fontWeight="bold"
            lineHeight={1.5}
            cursor="pointer"
            onClick={() => push('/services')}
          >
            Послуги
          </H3>
          <Box>
            {
              services.map((item, index) => (
                <Box
                  my=".5rem"
                  key={index}
                  color="#413189"
                  cursor="pointer"
                  lineHeight={1.5}
                  textTransform="capitalize"
                  onClick={() => push(`/services/${item.query}`)}
                >
                  {R.toLower(R.path(['title'], item))}
                </Box>
              ))
            }
          </Box>
        </Box>
      </Flex>
      </Section>
    </Layout>
  );
}

export default Services;
