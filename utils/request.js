const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

export const dynamic = 'force-dynamic';

// Fetch all properties
async function fetchProperties({ showFeatured = false } = {}) {
  try {
    // handle the case where the domain is not available yet
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(
      `${apiDomain}/properties${showFeatured ? '/featured' : ''}`,
      { cache: 'no-store' }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.log(error, 'the error');
    return [];
  }
}

// Fetch single property
async function fetchProperty(id) {
  try {
    // handle the case where the domain is not available yet
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/properties/${id}`);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.log(error, 'the error');
    return null;
  }
}

export { fetchProperties, fetchProperty };
