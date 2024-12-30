export type ContentfulBlogPost = {
    metadata: {
      tags: string[];
      concepts: string[];
    };
    contentTypeId: string
    sys: {
      space: {
        sys: {
          type: "Link";
          linkType: "Space";
          id: string;
        };
      };
      id: string;
      type: "Entry";
      createdAt: string;
      updatedAt: string;
      environment: {
        sys: {
          id: string;
          type: "Link";
          linkType: "Environment";
        };
      };
      publishedVersion: number;
      revision: number;
      contentType: {
        sys: {
          type: "Link";
          linkType: "ContentType";
          id: string;
        };
      };
      locale: string;
    };
    fields: {
      title: string;
      slug: string;
      readingTime: number;
      blogContent: BlogContentNode[];
    };
  };
  
  export type BlogContentNode = {
    nodeType: string;
    data: Record<string, any>;
    content: (BlogContentNode | BlogTextNode)[];
  };
  
  export type BlogTextNode = {
    nodeType: "text";
    value: string;
    marks: any[];
    data: Record<string, any>;
  };
  